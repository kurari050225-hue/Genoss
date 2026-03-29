const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Muestra el avatar de un usuario')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario (opcional, por defecto tú)')
                .setRequired(false)),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario') || interaction.user;
        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${user.username}`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(0x0099ff);

        await interaction.reply({ embeds: [embed] });
    },
};