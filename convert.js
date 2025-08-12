const sharp = require('sharp');

const sizes = [1920, 1280];
const formats = ['avif', 'webp', 'jpeg'];

sizes.forEach(size => {
    formats.forEach(fmt => {
        sharp('hero-original.jpg') // Sostituisci con il nome della tua immagine
            .resize(size)
            [fmt]({ quality: 75 })
            .toFile(`assets/img/hero/hero-office-${size}.${fmt}`)
            .then(() => console.log(`Creato hero-office-${size}.${fmt}`))
            .catch(err => console.error(err));
    });
});
