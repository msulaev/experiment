const http = require('http');
const fs = require('fs');
http.createServer( (req, res) => {
    getTitles(res);
}).listen(8000, '127.0.0.1');

function getTitles(res) {
    fs.readFile('package/first_http_server/titles.json', (err, data) => {
        if (err) return hadError(err, res);
        getTemplate(JSON.parse(data.toString()), res);
    })
}

function getTemplate(titles, res) {
    fs.readFile("package/first_http_server/template.html", (err, data) => {
        if (err) return hadError(err, res);
        formatHTML(titles, data.toString(), res);
    });
}

function formatHTML(titles, tmpl, res) {
    const html = tmpl.replace('%', titles.join('</li><li>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
}

function hadError(err, res) {
    console.error(err);
    console.log("server error")
}