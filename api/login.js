export default async function handler(req, res) {
    // CORS para permitir apenas o domínio do GitHub Pages
    res.setHeader("Access-Control-Allow-Origin", "https://dbrunini.github.io");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const { username, password } = req.body;
    const validUser = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    if (username === validUser && password === validPassword) {
        try {
            // Realiza o fetch do Power BI
            const response = await fetch(process.env.POWER_BI_LINK);
            const data = await response.text();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar o relatório" });
        }
    } else {
        res.status(401).json({ success: false });
    }
}
