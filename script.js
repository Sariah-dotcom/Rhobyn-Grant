// function imageChanger() {
//     const rhobynImg = document.querySelector('.img-changer img');
//     const originalSrc = rhobynImg.src; // Save the original image src

//     // Set an interval to change the image every 2 seconds
//     setInterval(() => {
//         // Change the image to 'Images/rhobyn-2.png' after 1 second
//         setTimeout(() => {
//             rhobynImg.src = 'Images/rhobyn-2.png';
//            // rhobynImg.style.height = '40rem'; // Adjust the height of the image
//         }, 1000);

//         // Revert to the original image after another 1 second
//         setTimeout(() => {
//             rhobynImg.src = originalSrc;
//             rhobynImg.style.height = ''; // Revert to original height
//         }, 2000);
//     }, 2000); // Repeat every 2 seconds
// }


// imageChanger();