// "use client"
// import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/router";

// interface AuthContextType {
//   isAuthenticated: boolean;
//   login: () => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   isAuthenticated: false,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const router = useRouter();

//   // Simulate login (for example purposes)
//   const login = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem("auth", "true");
//     router.push("/dashboard");
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("auth");
//     router.push("/signin");
//   };

//   useEffect(() => {
//     // Check if user is authenticated when the app loads
//     const auth = localStorage.getItem("auth");
//     if (auth === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook for easier access to authentication context
// export const useAuth = () => useContext(AuthContext);
