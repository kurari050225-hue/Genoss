const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Muestra el último mensaje eliminado del canal'),

    async execute(interaction) {
        const snipe = interaction.client.snipes.get(interaction.channel.id);

        if (!snipe) {
            return interaction.reply({ content: 'No hay mensajes eliminados recientes en este canal.', ephemeral: true });
        }

        await interaction.reply({ content: `**Snipe:** ${snipe.author} dijo: ${snipe.content} (eliminado ${snipe.deletedAt})` });
    },
};