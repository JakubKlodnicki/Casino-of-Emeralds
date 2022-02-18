import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {
});

$(function() {
    var basicCooldownExample = new Cooldown({
        padding: 10,
        buttons: $('#basic-cooldown-example button'),
        length: 7,
        autoSetupAll: true
    });
    
    var customCooldownExample = new Cooldown({
        buttons: $('#custom-cooldown-example button'),
        length: 1
    });
    customCooldownExample.autoSetup(customCooldownExample.buttons[0], {color: 'red'})
        .autoSetup(customCooldownExample.buttons[1], {length: 0.5});
});