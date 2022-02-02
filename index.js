const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use(
bodyParser.urlencoded({
extended: true,
})
);



app.get('/', (req, res) => {
    res.json({'message': 'ok'});
});




app.listen(port, () => {
console.log(`Começou http://localhost:${port}`)
});

const cadastroRouter = require('./routes/cadastro');
const enderecoRouter = require('./routes/endereco');
const adminRouter = require('./routes/admin');
const documentoRouter = require('./routes/documento');
const loginRouter = require('./routes/login');
const senhaRouter = require('./routes/senha');


app.use('/cadastro', cadastroRouter);
app.use('/endereco',enderecoRouter);
app.use('/admin', adminRouter);
app.use('/documento', documentoRouter);
app.use('/login', loginRouter);
app.use('/senha', senhaRouter);



/* middleware de tratamento de erro */
app.use((err, req, res, next) => {
const statusCode = err.statusCode || 500;
console.error(err.message, err.stack);
res.status(statusCode).json({'message': err.message});
return;
});

