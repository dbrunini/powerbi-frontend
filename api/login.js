export default function handler(req, res) {
    // Cabeçalhos para permitir CORS
    res.setHeader("Access-Control-Allow-Origin", "https://dbrunini.github.io/powerbi-frontend/");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Processar credenciais
    const { username, password } = req.body;
    const validUser = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    if (username === validUser && password === validPassword) {
        res.status(200).json({ success: true, link: process.env.POWER_BI_LINK });
    } else {
        res.status(401).json({ success: false });
    }
}
