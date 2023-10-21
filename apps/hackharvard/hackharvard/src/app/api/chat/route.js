import { answerMessage } from '@/utils';

function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

export async function POST(request) {

  const res = await request.json();

  console.log(res);

  const { message, conversation } = res;

  async function* makeIterator() {
    const response = await answerMessage(message, conversation);
    for await (const chunk of response) {
      console.log(chunk.text);
      yield chunk.text;
    }
  }

  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);
  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain' }
  });

}