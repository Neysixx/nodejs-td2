const fs = require('fs');
const path = require('path');
const os = require('os');

// Collecte des informations système
const systemInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    cpus: os.cpus().length,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    timestamp: new Date().toLocaleString()
};

// Création du dossier logs si inexistant
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Création du fichier system_report.txt
const filePath = path.join(logsDir, 'system_report.txt');
const reportContent = `Système : ${systemInfo.platform}\nArchitecture : ${systemInfo.architecture}\nCPU : ${systemInfo.cpus}\nMémoire Totale : ${systemInfo.totalMemory}\nMémoire Libre : ${systemInfo.freeMemory}\nDate : ${systemInfo.timestamp}\n`;

fs.writeFileSync(filePath, reportContent);

console.log(`Rapport système créé avec succès : ${filePath}`);
