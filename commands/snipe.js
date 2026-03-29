const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snipe')
        .setDescription('Muestra el último mensaje eliminado del canal'),

    async execute(interaction) {
        const snipe = interaction.client.snipes.get(interaction.channel.id);

        if (!snipe) {
            return interaction.reply({ content: 'No hay mensajes eliminados recientes en este canal.', ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setTitle('Último mensaje eliminado')
            .addFields(
                { name: 'Autor', value: snipe.author, inline: true },
                { name: 'Eliminado', value: snipe.deletedAt, inline: true },
                { name: 'Contenido', value: snipe.content || 'No hay contenido' }
            )
            .setColor(0xff0000)
            .setFooter({ text: `Canal: ${interaction.channel.name}` });

        await interaction.reply({ embeds: [embed] });
    },
};