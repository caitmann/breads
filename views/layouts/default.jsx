const React = require('react')

function Default(html) {
    return (
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{html.title || 'Default'}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
            <link rel="stylesheet" href="/main.css"/>
        </head>
        <body>
            <h1>HTML rendered!</h1>
            <div className="wrapper">
                <header>
                    <h1><a href="/breads">BreadCRUD</a></h1>
                </header>
                <div className="container">
                    {html.children}
                </div>
            </div>
        </body>
        </html>
    )
}

module.exports = Default