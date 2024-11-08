export default function handler(req, res) {
    // Configurações de CORS para permitir o frontend do GitHub Pages
    res.setHeader("Access-Control-Allow-Origin", "https://dbrunini.github.io");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(200).end(); // Responde a pré-verificações do CORS
        return;
    }

    // Verificação de autenticação
    const { username, password } = req.body;
    const validUser = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    if (username === validUser && password === validPassword) {
        res.status(200).json({ success: true, link: process.env.POWER_BI_LINK });
    } else {
        res.status(401).json({ success: false });
    }
}
