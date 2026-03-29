const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mod')
        .setDescription('Muestra el formulario de moderador'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Craft an Anime Staff')
            .setDescription('**Formulario de moderador**\n\n1. ¿Conoces las reglas de discord?\n\n2. ¿Cuántos años tienes?\n\n3. ¿Cuántas horas puedes dedicarte a gestionar el servidor?\n\n4. ¿Tienes experiencia siendo moderador? (si fue asi danos pruebas de que si lo fuiste).\n\n5. ¿Tienes el A2F activado? (Si no lo tienes te enseñaremos cómo activarlo).\n\n6. ¿Cómo solucionarías una pelea entre miembros?\n\n7. ¿Qué harías si no sabes si un reporte esta bien oh mal?\n\n8. Si un amigo tuyo rompe las reglas, ¿le darías la sanción?\n\n9. ¿Qué harías si ves a otro moderador abusando de su poder?\n\n10. ¿Cómo actuarías ante un usuario que insulta pero luego borra los mensajes?\n\n11. ¿Qué harías si un usuario te falta el respeto directamente a ti?\n\n12. ¿Sabes usar bots de moderación (ej: MEE6, Dyno, Carl-bot, Neko etc.)? ¿Cuáles?\n\n13. ¿Cómo identificarías a un posible estafador dentro del servidor?')
            .setColor(0x0099ff);

        await interaction.reply({ embeds: [embed] });
    },
};