export default function handler(req, res) {
    // Adicione o cabeçalho CORS para permitir o domínio do GitHub Pages
    res.setHeader("Access-Control-Allow-Origin", "https://dbrunini.github.io");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        // Responde a requisições OPTIONS antes do POST para o CORS pré-vôo
        res.status(200).end();
        return;
    }

    // Dados de autenticação
    const { username, password } = req.body;
    const validUser = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    // Verifica se o usuário e a senha estão corretos
    if (username === validUser && password === validPassword) {
        const powerBiHtml = `
            <iframe src="${process.env.POWER_BI_LINK}" 
                    style="width: 100%; height: 600px; border: none;">
            </iframe>
        `;
        res.status(200).send(powerBiHtml);
    } else {
        res.status(401).json({ success: false });
    }
}
