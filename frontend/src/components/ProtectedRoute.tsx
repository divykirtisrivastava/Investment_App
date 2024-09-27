// "use client";
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import useAuth from '../hooks/useAuth';

// const ProtectedRoute = (WrappedComponent: any) => {
//   return (props: any) => {
//     const { isAuthenticated } = useAuth();
//     const router = useRouter();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       // Check authentication status on component mount
//       if (isAuthenticated) {
//         setLoading(false); // Authentication status is verified
//       } else {
//         router.push('/signin'); // Redirect to sign-in page if not authenticated
//       }
//     }, [isAuthenticated, router]);

//     if (loading) {
//       return <p>Loading...</p>; // Show a loading indicator while authentication is being verified
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default ProtectedRoute;
