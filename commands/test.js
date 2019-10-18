////
// Skrypt stworzony przez Taki Tam Slu#5916.
// Nazwa pliku może być jakakolwiek.
// Wszystkie polecenia bota trzymaj w katalogu "commands".
////

module.exports.run = async (_client, message) => {
    // Zwykłe wysyłanie wiadomości.
    // Pamiętaj zawsze, że na koniec skrypt do wysyłaniu wiadomości musi być średnik ";". Nie jest to akurat tylko w tym przypadku.
    message.channel.send("Blablabla... tu wpisz wiadomość");
}
module.exports.help = {
    name: "test" // Nazwa polecenia. Bez prefiksu!
    // Prefix bota jest możliwy do zmiany w pliku "config.json".
}