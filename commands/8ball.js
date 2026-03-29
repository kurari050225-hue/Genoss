const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Pregunta a la bola mágica')
        .addStringOption(option =>
            option.setName('pregunta')
                .setDescription('Tu pregunta')
                .setRequired(true)),

    async execute(interaction) {
        const question = interaction.options.getString('pregunta');
        const responses = [
            'Sí', 'No', 'Tal vez', 'Definitivamente', 'No lo sé',
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        await interaction.reply(`Pregunta: ${question}\nRespuesta: ${randomResponse}`);
    },
};