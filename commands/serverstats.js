const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverstats')
        .setDescription('Estadísticas del servidor'),

    async execute(interaction) {
        const guild = interaction.guild;
        const embed = new EmbedBuilder()
            .setTitle(`Estadísticas de ${guild.name}`)
            .addFields(
                { name: 'Miembros', value: guild.memberCount.toString(), inline: true },
                { name: 'Canales', value: guild.channels.cache.size.toString(), inline: true },
                { name: 'Roles', value: guild.roles.cache.size.toString(), inline: true },
            )
            .setColor(0x0099ff);

        await interaction.reply({ embeds: [embed] });
    },
};