export default function formattedPrice(price) {
    return new Intl.NumberFormat("it-IT").format(price);
}