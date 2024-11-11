export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "https://dbrunini.github.io");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { username, password } = req.body;
    const validUser = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    if (username === validUser && password === validPassword) {
        // Retorne HTML seguro para o frontend que exibe o conteúdo do Power BI
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
