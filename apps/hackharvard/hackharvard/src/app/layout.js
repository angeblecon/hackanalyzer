export const metadata = {
  title: 'Hackharvard'
};

import StyledJsxRegistry from './registry'
 
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <StyledJsxRegistry>
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  )
};