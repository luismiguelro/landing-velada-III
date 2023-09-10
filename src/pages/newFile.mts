import { $boxersImages } from "./index.astro.2.mjs";

$boxersImages?.forEach(($img) => {
$img.addEventListener("mouseleave", () => {
$boxersImages?.forEach(($img) => {
$img.setAttribute("style", "filter: transition: all .3s ease-in-out");
});
});

$img.addEventListener("mouseenter", () => {
const sectionImages = $img.parentNode?.children;
const position = Array.from(sectionImages).indexOf($img);

// get the image for the left side and the rigth side
const [leftBoxer, rightBoxer] = [
$boxersImages[position],
$boxersImages[position + $boxersImages.length / 2], // obtener el de la derecha
];

// ocultar boxeadores q no interesan
$boxersImages?.forEach(($img) => {
$img.setAttribute(
"style",
"filter: blur(2px) grayscale(.8); transition: all .3s ease-in-out"
);
});

// enfocar
leftBoxer.setAttribute(
"style",
"scale: 1; contrast: 1.1; transition: all .3s ease-in-out"
);

rightBoxer.setAttribute(
"style",
"scale: 1; contrast: 1.1; transition: all .3s ease-in-out"
);
});
});
