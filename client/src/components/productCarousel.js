// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// export default function ProductCarousel(props) {
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3,
//           slidesToSlide: 3 // optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2,
//           slidesToSlide: 2 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1,
//           slidesToSlide: 1 // optional, default to 1.
//         }
//     };

//     return (
//         <Carousel
//             swipeable={true}
//             draggable={false}
//             showDots={true}
//             responsive={responsive}
//             ssr={true}
//             infinite={true}
//             // autoPlay={props.deviceType !== "mobile" ? true : false}
//             // autoPlaySpeed={1000}
//             keyBoardControl={true}
//             customTransition="all .5"
//             // transitionDuration={500}
//             removeArrowOnDeviceType={["tablet", "mobile"]}
//             deviceType={props.deviceType}
//             dotListClass="custom-dot-list-style"
//         >
//                 <div className="w-full h-auto bg-white flex flex-col items-center p-2 gap-2">
//                     <img    
                                                    
//                         className='w-full h-full montage-pc wallpaper2 rounded'
//                         src={require('../assets/gta-6.webp')}
//                         alt="comment choisir son bureau gaming"
//                         />
//                         <h1>Console Xbox</h1>
//                 </div>

//                 <div className="w-full h-auto bg-white flex flex-col items-center p-2 gap-2">
//                     <img    
                                                
//                         className='w-full montage-pc wallpaper2 rounded'
//                         src={require('../assets/gta-6.webp')}
//                         alt="comment choisir son bureau gaming"
//                         />
//                         <h1>Console PS5</h1>
//                 </div>
                
//                 <div className="w-full h-auto bg-white flex flex-col items-center p-2 gap-2">
//                     <img    
                                            
//                         className='w-full montage-pc wallpaper2 rounded'
//                         src={require('../assets/gta-6.webp')}
//                         alt="comment choisir son bureau gaming"
//                         />
//                         <h1>Hello</h1>
//                 </div>
//                 <div className="w-full h-auto bg-white flex flex-col items-center p-2 gap-2">
//                     <img    
                                        
//                         className='w-full montage-pc wallpaper2 rounded'
//                         src={require('../assets/gta-6.webp')}
//                         alt="comment choisir son bureau gaming"
//                         />
//                         <h1>Hello</h1>
//                 </div>



//         </Carousel>
//     );
// }
