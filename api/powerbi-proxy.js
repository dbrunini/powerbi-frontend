export default function handler(req, res) {
    // Verifica o método da requisição para evitar acessos não autorizados
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Validação de credenciais
        const validUser = process.env.VALID_USER;
        const validPassword = process.env.VALID_PASSWORD;
        const powerBILink = process.env.POWER_BI_LINK;  // link verdadeiro do Power BI

        // Autenticação
        if (username === validUser && password === validPassword) {
            res.status(200).json({ success: true, iframeContent: `<iframe src="${powerBILink}" width="100%" height="600px"></iframe>` });
        } else {
            res.status(401).json({ success: false, message: 'Credenciais inválidas.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
