<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Challenge</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .site {
            height: 100vh;
            width: 100vw;
            padding: 20px 0px;
            background-color: gainsboro;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;

            @media (prefers-color-scheme: dark) {
                background-color: #292929;
            }

        }

        h1 {
            color: rgb(24, 24, 24);
            margin-bottom: 10px;
            
            @media (prefers-color-scheme: dark) {
                color: rgb(243, 243, 243);
            }
        }

        .center-iframe {
            width: 100vw;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        iframe {
            height: 400px;
            width: 400px;
            border-radius: 5px;
            border: 2px solid rgb(151, 151, 151);
            box-sizing: content-box;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.233);
        }

        .links {
            height: auto;
            width: 400px;
            display: flex;
            justify-content: space-evenly;
            margin-left: 50%;
            transform: translateX(-50%);
            flex-flow: row wrap;
        }

        a {
            color: rgb(24, 24, 24);
            background-color: white;
            text-decoration: none;
            margin: 10px;
            margin-top: 20px;
            text-transform: uppercase;
            font-weight: bold;
            width: 70px;
            height: 22px;
            text-align: center;
            border-radius: 3px;
            padding: 2px;
            box-sizing: content-box;
            flex-basis: 70px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.37);
            
            @media (prefers-color-scheme:dark) {
                background-color: rgb(88, 88, 88);
                color: rgb(240, 240, 240);
            }
        }
    </style>
</head>
<body>
    <div class="site">
        <h1>CSS Challenge</h1>
        <div class="center-iframe">
            <iframe src="Day001/index.html" frameborder="0" name="iframe"></iframe>
        </div>
        <div class="links">
            <a href="Day001/index.html" target="iframe">Day 01</a>
            <a href="Day002/index.html" target="iframe">Day 02</a>
            <a href="Day003/index.html" target="iframe">Day 03</a>
            <a href="Day004/index.html" target="iframe">Day 04</a>
        </div>
    </div>
</body>
</html>