// import { Card, CardContent, Avatar, Typography, Rating, Box } from '@mui/material';
// import React from 'react';

// interface ReviewCardProps {
//   image?: string;
//   company: string;
//   review: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({
//   image,
//   company,
//   review
// }) => {
//   return (
//     <Card sx={{ padding: 2, maxWidth: 340 }}>
//       <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 32 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Avatar>{company.toUpperCase().charAt(0)}</Avatar>
//             <Typography variant="body2" sx={{ fontSize: 14 }}>
//               {company}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//             <Rating name="read-only" value={5} readOnly sx={{ width: 'fit-content' }} />
//           </Box>
//         </Box>
//         <Typography
//           variant="body2"
//           sx={{
//             height: 80,
//             overflow: 'hidden',
//             textOverflow: 'ellipsis',
//             display: '-webkit-box',
//             WebkitLineClamp: 4,
//             WebkitBoxOrient: 'vertical',
//           }}
//         >
//           {review}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ReviewCard;
