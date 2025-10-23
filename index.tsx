
import { GoogleGenAI, Chat } from "@google/genai";

// Fix: Declare global variables for third-party libraries to resolve 'Cannot find name' errors.
declare var gsap: any;
declare var THREE: any;
declare var firebase: any;

document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    /**
     * A lightweight, self-contained MD5 function.
     * No external libraries needed.
     */
    const md5 = (function(){function d(q,s){var t=(q&65535)+(s&65535);return(q>>16)+(s>>16)+(t>>16)<<16|t&65535}function e(q,s){return q<<s|q>>>32-s}function f(q,s,t,u,v,w){return d(e(d(d(s,q),d(u,w)),v),t)}function g(q,s,t,u,v,w,x){return f(s&t|~s&u,q,s,v,w,x)}function h(q,s,t,u,v,w,x){return f(s&u|t&~u,q,s,v,w,x)}function k(q,s,t,u,v,w,x){return f(s^t^u,q,s,v,w,x)}function l(q,s,t,u,v,w,x){return f(t^(s|~u),q,s,v,w,x)}function m(q,s){var t=1732584193,u=-271733879,v=-1732584194,w=271733878;for(var x=0;x<q.length;x+=16){var y=t,z=u,A=v,B=w;t=g(t,u,v,w,q[x],7,-680876936);w=g(w,t,u,v,q[x+1],12,-389564586);v=g(v,w,t,u,q[x+2],17,606105819);u=g(u,v,w,t,q[x+3],22,-1044525330);t=g(t,u,v,w,q[x+4],7,-176418897);w=g(w,t,u,v,q[x+5],12,1200080426);v=g(v,w,t,u,q[x+6],17,-1473231341);u=g(u,v,w,t,q[x+7],22,-45705983);t=g(t,u,v,w,q[x+8],7,1770035416);w=g(w,t,u,v,q[x+9],12,-1958414417);v=g(v,w,t,u,q[x+10],17,-42063);u=g(u,v,w,t,q[x+11],22,-1990404162);t=g(t,u,v,w,q[x+12],7,1804603682);w=g(w,t,u,v,q[x+13],12,-40341101);v=g(v,w,t,u,q[x+14],17,-1502002290);u=g(u,v,w,t,q[x+15],22,1236535329);t=h(t,u,v,w,q[x+1],5,-165796510);w=h(w,t,u,v,q[x+6],9,-1069501632);v=h(v,w,t,u,q[x+11],14,643717713);u=h(u,v,w,t,q[x],20,-373897302);t=h(t,u,v,w,q[x+5],5,-701558691);w=h(w,t,u,v,q[x+10],9,38016083);v=h(v,w,t,u,q[x+15],14,-660478335);u=h(u,v,w,t,q[x+4],20,-405537848);t=h(t,u,v,w,q[x+9],5,568446438);w=h(w,t,u,v,q[x+14],9,-1019803690);v=h(v,w,t,u,q[x+3],14,-187363961);u=h(u,v,w,t,q[x+8],20,1163531501);t=h(t,u,v,w,q[x+13],5,-1444681467);w=h(w,t,u,v,q[x+2],9,-51403784);v=h(v,w,t,u,q[x+7],14,1735328473);u=h(u,v,w,t,q[x+12],20,-1926607734);t=k(t,u,v,w,q[x+5],4,-378558);w=k(w,t,u,v,q[x+8],11,-2022574463);v=k(v,w,t,u,q[x+11],16,1839030562);u=k(u,v,w,t,q[x+14],23,-35309556);t=k(t,u,v,w,q[x+1],4,-1530992060);w=k(w,t,u,v,q[x+4],11,1272893353);v=k(v,w,t,u,q[x+7],16,-155497632);u=k(u,v,w,t,q[x+10],23,-1094730640);t=k(t,u,v,w,q[x+13],4,681279174);w=k(w,t,u,v,q[x],11,-358537222);v=k(v,w,t,u,q[x+3],16,-722521979);u=k(u,v,w,t,q[x+6],23,76029189);t=k(t,u,v,w,q[x+9],4,-640364487);w=k(w,t,u,v,q[x+12],11,-421815835);v=k(v,w,t,u,q[x+15],16,530742520);u=k(u,v,w,t,q[x+2],23,-995338651);t=l(t,u,v,w,q[x],6,-198630844);w=l(w,t,u,v,q[x+7],10,1126891415);v=l(v,w,t,u,q[x+14],15,-1416354905);u=l(u,v,w,t,q[x+5],21,-57434055);t=l(t,u,v,w,q[x+12],6,1700485571);w=l(w,t,u,v,q[x+3],10,-1894986606);v=l(v,w,t,u,q[x+10],15,-1051523);u=l(u,v,w,t,q[x+1],21,-2054922799);t=l(t,u,v,w,q[x+8],6,1873313359);w=l(w,t,u,v,q[x+15],10,-30611744);v=l(v,w,t,u,q[x+6],15,-1560198380);u=l(u,v,w,t,q[x+13],21,1309151649);t=l(t,u,v,w,q[x+4],6,-145523070);w=l(w,t,u,v,q[x+11],10,-1120210379);v=l(v,w,t,u,q[x+2],15,718787259);u=l(u,v,w,t,q[x+9],21,-343485551);t=d(t,y);u=d(u,z);v=d(v,A);w=d(w,B)}return[t,u,v,w]}function n(q){var s="";for(var t=0;t<q.length*32;t+=8){s+=String.fromCharCode(q[t>>5]>>>t%32&255)}return s}function p(q){var s=[];s[(q.length>>2)-1]=void 0;for(var t=0;t<s.length;t+=1){s[t]=0}for(var t=0;t<q.length*8;t+=8){s[t>>5]|=(q.charCodeAt(t/8)&255)<<t%32}return s}function r(q){var s="0123456789abcdef",t="";for(var u=0;u<q.length*4;u+=1){t+=s.charAt(q[u>>2]>>u%4*8+4&15)+s.charAt(q[u>>2]>>u%4*8&15)}return t}return function(q){return r(m(p(q),q.length*8))}})();

    /**
     * =============================================================================
     * REALTIME API SERVICE LAYER (Firebase Integration)
     * =============================================================================
     * This module now connects to a real Firebase backend for authentication,
     * data storage (Firestore), and file uploads (Firebase Storage). All data
     * is now live and will sync across devices.
     * =============================================================================
     */
    let mcsCurrentUser = null;
    let authInitialized = false;
    let userDocUnsubscribe = null; // To hold the listener's unsubscribe function

    // --- Authentication System ---
    const authModalOverlay = document.getElementById('auth-modal-overlay');
    const closeAuthModalBtn = document.getElementById('close-auth-modal-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    
    // onAuthStateChanged is the single source of truth for auth state.
    // It handles the initial load, login, and logout.
    const onAuthReady = new Promise(resolve => {
        firebase.onAuthStateChanged(firebase.auth, (user) => {
            // Detach any existing listener when auth state changes
            if (userDocUnsubscribe) {
                userDocUnsubscribe();
                userDocUnsubscribe = null;
            }

            if (user) {
                // User is signed in. Set up a real-time listener for their document.
                const userDocRef = firebase.doc(firebase.db, "users", user.uid);
                
                userDocUnsubscribe = firebase.onSnapshot(userDocRef, (docSnap) => {
                    if (docSnap.exists()) {
                        mcsCurrentUser = { uid: user.uid, email: user.email, name: user.displayName, ...docSnap.data() };
                    } else {
                        // Fallback for users that exist in Auth but not Firestore
                        mcsCurrentUser = { uid: user.uid, email: user.email, name: user.displayName, username: user.email.split('@')[0] };
                    }

                    // **New:** Check local storage for a profile picture and override the one from db.
                    const localPic = localStorage.getItem(`profilePic_${user.uid}`);
                    if (localPic) {
                        mcsCurrentUser.profilePicUrl = localPic;
                    }
                    
                    // This now runs on initial load AND any change to the user doc (e.g., profile pic update)
                    updateUIForAuthState();
                    
                    // If user is logged in, ensure the modal is hidden.
                    if (authModalOverlay.classList.contains('is-visible')) {
                        authModalOverlay.classList.remove('is-visible');
                        body.classList.remove('body-lock');
                    }

                    if (!authInitialized) {
                        authInitialized = true;
                        resolve(mcsCurrentUser);
                    }
                }, (error) => {
                    console.error("Error listening to user document:", error);
                     if (!authInitialized) {
                        authInitialized = true;
                        resolve(null);
                    }
                });

            } else {
                // User is signed out or is a new visitor.
                mcsCurrentUser = null;
                // Force sign-up/login modal for any unauthenticated user.
                authModalOverlay.classList.add('is-visible');
                body.classList.add('body-lock');
                // **Fix:** Show login form by default on logout/new visit.
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                closeAuthModalBtn.style.display = 'none'; // Prevent closing the modal
                
                updateUIForAuthState(); // Update UI to remove profile icons etc.

                if (!authInitialized) {
                    authInitialized = true;
                    resolve(null);
                }
            }
        });
    });
    
    const backendApi = {
        login: async (email, password) => {
            try {
                const userCredential = await firebase.signInWithEmailAndPassword(firebase.auth, email, password);
                const user = userCredential.user;
                
                // The onSnapshot listener will handle the UI update. We just need to resolve the user.
                const userDocRef = firebase.doc(firebase.db, "users", user.uid);
                const userDocSnap = await firebase.getDoc(userDocRef);

                if (userDocSnap.exists()) {
                     return { user: {
                        uid: user.uid,
                        email: user.email,
                        name: user.displayName,
                        ...userDocSnap.data()
                    }, error: null };
                }
                return { user: null, error: "User data not found." };
            } catch (error) {
                console.error("Firebase Login Error:", error);
                let errorMessage = "An unknown error occurred. Please try again.";
                switch (error.code) {
                    case 'auth/invalid-credential':
                    case 'auth/invalid-login-credentials':
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        errorMessage = "Incorrect email or password. Please check your details and try again.";
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = "Too many login attempts. Please try again later.";
                        break;
                }
                return { user: null, error: errorMessage };
            }
        },

        signup: async ({ name, email, password }) => {
            try {
                // Check if username is unique
                const baseUsername = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
                let username = baseUsername;
                let attempts = 0;
                let isUnique = false;
                while(!isUnique) {
                    const q = firebase.query(firebase.collection(firebase.db, "users"), firebase.where("username", "==", username));
                    const querySnapshot = await firebase.getDocs(q);
                    if (querySnapshot.empty) {
                        isUnique = true;
                    } else {
                        attempts++;
                        const randomSuffix = Math.random().toString(36).substring(2, 6);
                        username = `${baseUsername}${attempts > 1 ? `_${attempts}`: ''}${randomSuffix}`;
                    }
                }

                const userCredential = await firebase.createUserWithEmailAndPassword(firebase.auth, email, password);
                const user = userCredential.user;
                
                await firebase.updateProfile(user, { displayName: name });
                
                const newUser = {
                    uid: user.uid,
                    name,
                    username,
                    email,
                    profilePicUrl: '' // Stays empty in DB, will be handled by local storage
                };

                await firebase.setDoc(firebase.doc(firebase.db, "users", user.uid), newUser);
                // The onSnapshot listener will set mcsCurrentUser and update the UI.
                return { user: newUser, error: null };
            } catch (error) {
                console.error("Firebase Signup Error:", error);
                return { user: null, error: error.message || 'An error occurred during sign up.' };
            }
        },
        
        logout: async () => {
             await firebase.signOut(firebase.auth);
             // The onAuthStateChanged listener will handle UI changes and setting mcsCurrentUser to null.
        },

        getCurrentUser: async () => {
            if (!authInitialized) {
                await onAuthReady;
            }
            return mcsCurrentUser;
        },
        
        getReviews: async () => {
            const reviewsCol = firebase.collection(firebase.db, "reviews");
            const q = firebase.query(reviewsCol, firebase.orderBy("createdAt", "desc"));
            const reviewSnapshot = await firebase.getDocs(q);

            if (reviewSnapshot.empty) {
                // If no reviews, seed with default ones
                const defaultReviews = [
                    { name: "Asfaque Raza", text: "MCS Institute transformed my career. The hands-on projects and supportive instructors were game-changing. I landed my dream job just weeks after graduating!", email: "default1@example.com" },
                    { name: "Hazrat Bilal", text: "The Data Science course was incredibly comprehensive. I went from a complete beginner to confidently building complex machine learning models.", email: "default2@example.com" },
                    { name: "Faizan Ali", text: "I loved the focus on real-world UI/UX challenges. The portfolio I built during the course was instrumental in getting my first design role.", email: "default3@example.com" }
                ];
                for (const review of defaultReviews) {
                    await firebase.addDoc(reviewsCol, { ...review, createdAt: firebase.serverTimestamp() });
                }
                // Fetch again
                const newSnapshot = await firebase.getDocs(q);
                return newSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
            
            return reviewSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },

        listenForReviews: (callback) => {
            const reviewsCol = firebase.collection(firebase.db, "reviews");
            const q = firebase.query(reviewsCol, firebase.orderBy("createdAt", "desc"));
            
            const unsubscribe = firebase.onSnapshot(q, (querySnapshot) => {
                const reviews = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                callback(reviews);
            });
            return unsubscribe;
        },

        saveReview: async (review) => {
            const reviewsCol = firebase.collection(firebase.db, "reviews");
            const reviewData = {
                ...review,
                createdAt: firebase.serverTimestamp()
            };
            
            if (review.id) { // Editing
                const reviewRef = firebase.doc(firebase.db, "reviews", review.id);
                await firebase.setDoc(reviewRef, reviewData, { merge: true });
                return { ...reviewData, id: review.id };
            } else { // New review
                delete reviewData.id; // Remove null id
                const docRef = await firebase.addDoc(reviewsCol, reviewData);
                return { ...reviewData, id: docRef.id };
            }
        },

        deleteReview: async (reviewId, reviewAuthor, reviewText) => {
            if (!reviewId) return { error: "Review ID is required." };
            try {
                const reviewRef = firebase.doc(firebase.db, "reviews", reviewId);
                await firebase.deleteDoc(reviewRef);

                 // Send email notification for deletion
                const emailMessage = `
                    A review has been DELETED:
                    Author: ${reviewAuthor.name} (@${reviewAuthor.username})
                    Email: ${reviewAuthor.email}
                    
                    Deleted Review Text:
                    "${reviewText}"
                `;
                const emailFormData = new FormData();
                emailFormData.append("access_key", "b1ed0600-7eea-4d87-a55d-712e1813c95c");
                emailFormData.append("subject", "Review DELETED from MCS Website");
                emailFormData.append("from_name", "MCS Website Notifier");
                emailFormData.append("email_to", "mcsinstitute395@gmail.com");
                emailFormData.append("message", emailMessage);

                fetch('https://api.web3forms.com/submit', { method: 'POST', body: emailFormData })
                    .catch(err => console.error("Failed to send review deletion notification email:", err));


                return { error: null };
            } catch (error) {
                console.error("Error deleting review:", error);
                return { error: "Could not delete review. Please try again." };
            }
        },
        
        saveProfilePicture: async (user, base64Image) => {
            if (!user || !user.uid) return { url: null, error: "User not found." };
            
            try {
                // **New Logic:** Save to localStorage instead of Firebase Storage
                localStorage.setItem(`profilePic_${user.uid}`, base64Image);
                return { url: base64Image, error: null };
            } catch (error) {
                console.error("Error saving profile picture to localStorage: ", error);
                // LocalStorage might be full or disabled in private browsing
                return { url: null, error: "Could not save picture. Storage might be full." };
            }
        },

        getProfilePicture: async (email, gravatarUrl) => {
            // This function is now deprecated in favor of getting the URL from the user object.
            // Kept for compatibility, but should not be actively used.
            if(mcsCurrentUser && mcsCurrentUser.profilePicUrl) {
                return mcsCurrentUser.profilePicUrl;
            }
            return gravatarUrl;
        }
    };

    // --- Toast Notification ---
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                if (toast.parentNode) {
                    toast.remove();
                }
            });
        }, 3000);
    }
    
    // --- Sidebar Navigation ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

    const openSidebar = () => {
        menuToggle.classList.add('is-active');
        sidebar.classList.add('is-open');
        sidebarOverlay.classList.add('is-open');
        body.classList.add('body-lock');
        // Fix: Use declared 'gsap' global variable.
        gsap.to('.sidebar-nav a', {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3
        });
    };

    const closeSidebar = () => {
        menuToggle.classList.remove('is-active');
        sidebar.classList.remove('is-open');
        sidebarOverlay.classList.remove('is-open');
        if(!document.querySelector('.modal-overlay.is-visible')) {
            body.classList.remove('body-lock');
        }
        // Fix: Use declared 'gsap' global variable.
        gsap.set('.sidebar-nav a', { opacity: 0, x: 20 });
    };

    menuToggle.addEventListener('click', () => sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar());
    sidebarOverlay.addEventListener('click', closeSidebar);
    sidebarCloseBtn.addEventListener('click', closeSidebar);
    
    document.querySelector('.sidebar-nav').addEventListener('click', (e) => {
        // Fix: Cast event target to HTMLElement to use 'closest' method.
        const link = (e.target as HTMLElement).closest('.sidebar-link');
        if (link && link.getAttribute('href').startsWith('#') && !link.id.includes('logout') && !link.id.includes('review-history')) {
             e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            closeSidebar();
            if (targetSection) {
                setTimeout(() => {
                    // Fix: Cast header to HTMLElement to access offsetHeight.
                    const header = document.querySelector<HTMLElement>('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }, 100);
            }
        }
    });
    // Fix: Use declared 'gsap' global variable.
    gsap.set('.sidebar-nav a', { opacity: 0, x: 20 });
    
    // --- More Auth System Elements ---
    const signupError = document.getElementById('signup-error');
    const loginError = document.getElementById('login-error');
    const showLoginLink = document.getElementById('show-login-link');
    const showSignupLink = document.getElementById('show-signup-link');
    const headerLeft = document.getElementById('header-left');
    const headerRight = document.getElementById('header-right');
    const sidebarProfileContainer = document.getElementById('sidebar-profile-section-container');
    
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginError.textContent = '';
        signupError.textContent = '';
    });

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        loginError.textContent = '';
        signupError.textContent = '';
    });

    async function handleProfilePictureUpload(event) {
        const user = await backendApi.getCurrentUser();
        if (!user) {
            showToast("You must be logged in to upload a picture.");
            return;
        }
        
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            showToast("File is too large. Max size is 5MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = async function(e) {
            const base64Image = e.target.result as string;
            
            showToast("Updating picture...");
            const { url: newProfilePicUrl, error } = await backendApi.saveProfilePicture(user, base64Image);

            if (newProfilePicUrl) {
                // **New Logic:** Manually update current user object and refresh UI for instant change.
                mcsCurrentUser.profilePicUrl = newProfilePicUrl;
                updateUIForAuthState();
                showToast("Profile picture updated!");
            } else {
                 showToast(error || "Failed to update profile picture.");
            }
        };
        reader.onerror = function() {
            showToast("Error reading file.");
        };
        reader.readAsDataURL(file);
    }

    const updateUIForAuthState = () => {
        // This function now reads the global mcsCurrentUser which is kept in sync by the listener
        const currentUser = mcsCurrentUser;

        document.querySelector('.profile-icon-wrapper')?.remove();
        document.getElementById('auth-header-button')?.remove();
        sidebarProfileContainer.innerHTML = '';
        
        if (currentUser) {
            const emailForGravatar = currentUser.email.trim().toLowerCase();
            const hash = md5(emailForGravatar);
            const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon&s=150`;
            const profilePicUrl = currentUser.profilePicUrl || gravatarUrl;

            const profileIconWrapper = document.createElement('div');
            profileIconWrapper.className = 'profile-icon-wrapper';
            const profileIcon = document.createElement('img');
            profileIcon.className = 'profile-icon magnetic-link';
            profileIcon.src = profilePicUrl;
            profileIcon.alt = `Profile for ${currentUser.name}`;
            profileIcon.setAttribute('aria-label', `Profile for ${currentUser.name}`);
            profileIconWrapper.appendChild(profileIcon);
            headerLeft.insertBefore(profileIconWrapper, headerLeft.firstChild);

            const divider = document.createElement('div');
            divider.className = 'sidebar-divider';
            
            const profileTitle = document.createElement('h4');
            profileTitle.className = 'sidebar-profile-title brand-gradient-text';
            profileTitle.textContent = 'Profile';

            const profileInfo = document.createElement('div');
            profileInfo.className = 'sidebar-profile-info';
            profileInfo.innerHTML = `
                <div class="sidebar-profile-pic-container">
                    <img src="${profilePicUrl}" alt="Profile Picture" class="sidebar-profile-pic">
                    <label for="profile-pic-upload" class="sidebar-pic-upload-btn magnetic-link">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                    </label>
                </div>
                <input type="file" id="profile-pic-upload" accept="image/png, image/jpeg, image/gif" style="display: none;">
                <div class="sidebar-profile-details">
                    <div class="name">${currentUser.name}</div>
                    <div class="username">@${currentUser.username}</div>
                </div>
            `;
            
            profileInfo.querySelector('#profile-pic-upload').addEventListener('change', handleProfilePictureUpload);

            const reviewHistoryLink = document.createElement('a');
            reviewHistoryLink.id = 'sidebar-review-history-link';
            reviewHistoryLink.href = "#";
            reviewHistoryLink.className = 'sidebar-link';
            reviewHistoryLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg><span>Review History</span>`;
            reviewHistoryLink.addEventListener('click', showReviewHistory);
            
            const logoutLink = document.createElement('a');
            logoutLink.id = 'sidebar-logout-link';
            logoutLink.href = "#";
            logoutLink.className = 'sidebar-link';
            logoutLink.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2z"></path></svg><span>Logout</span>`;
            logoutLink.addEventListener('click', handleLogout);

            sidebarProfileContainer.appendChild(divider);
            sidebarProfileContainer.appendChild(profileTitle);
            sidebarProfileContainer.appendChild(profileInfo);
            sidebarProfileContainer.appendChild(reviewHistoryLink);
            sidebarProfileContainer.appendChild(logoutLink);

        } else {
            const loginBtn = document.createElement('button');
            loginBtn.id = 'auth-header-button';
            loginBtn.className = 'header-login-btn magnetic-link';
            loginBtn.textContent = 'Login';
            loginBtn.addEventListener('click', () => {
                authModalOverlay.classList.add('is-visible');
                body.classList.add('body-lock');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                closeAuthModalBtn.style.display = 'block';
            });
            headerRight.insertBefore(loginBtn, menuToggle);
        }
        // Fix: Use declared 'gsap' global variable.
        gsap.set('.sidebar-nav a', { opacity: 0, x: 20 });
        document.querySelectorAll('.magnetic-link').forEach(addMagneticEffect);
    };
    
    const handleLogout = async (e) => {
        e.preventDefault();
        closeSidebar();
        await backendApi.logout();
        // After logout, the onAuthStateChanged listener will fire automatically, 
        // which will then show the forced login modal.
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        loginError.textContent = '';
        const email = e.target.email.value.trim().toLowerCase();
        const password = e.target.password.value;

        const { user, error } = await backendApi.login(email, password);

        if (user) {
            // The onAuthStateChanged listener will handle hiding the modal and updating the UI
            showToast(`Welcome back, ${user.name}!`);
        } else {
            loginError.textContent = error || 'An unknown error occurred.';
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        signupError.textContent = '';
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim().toLowerCase();
        const password = e.target.password.value;
        
        if (!name || !email || !password) {
            signupError.textContent = 'All fields are required.';
            return;
        }
        if (password.length < 6) {
            signupError.textContent = 'Password must be at least 6 characters.';
            return;
        }
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing up...';
        
        const { user, error } = await backendApi.signup({ name, email, password });

        if (error) {
            signupError.textContent = error;
            submitBtn.disabled = false;
            submitBtn.textContent = 'Sign Up';
            return;
        }
        
        // Email notification remains best-effort, doesn't block signup
        const emailNotificationData = new FormData();
        emailNotificationData.append("access_key", "b1ed0600-7eea-4d87-a55d-712e1813c95c");
        emailNotificationData.append("subject", "New User Signup at MCS Institute");
        emailNotificationData.append("from_name", "MCS Website Notifier");
        emailNotificationData.append("message", `A new user has signed up:\nName: ${user.name}\nUsername: ${user.username}\nEmail: ${user.email}`);
        emailNotificationData.append("email_to", "mcsinstitute395@gmail.com");

        fetch('https://api.web3forms.com/submit', { method: 'POST', body: emailNotificationData })
        .catch(err => console.error("Could not send signup notification email", err));
        
        // The onAuthStateChanged listener will handle hiding the modal and updating the UI
        showToast(`Welcome to MCS, ${name}!`);
    };

    signupForm.addEventListener('submit', handleSignup);
    loginForm.addEventListener('submit', handleLogin);
    closeAuthModalBtn.addEventListener('click', () => {
        authModalOverlay.classList.remove('is-visible');
        body.classList.remove('body-lock');
    });
    authModalOverlay.addEventListener('click', (e) => {
         if (e.target === authModalOverlay && closeAuthModalBtn.style.display !== 'none') {
            authModalOverlay.classList.remove('is-visible');
            body.classList.remove('body-lock');
         }
    });

    // --- Review Modal ---
    const writeReviewBtn = document.getElementById('write-review-btn');
    const reviewModalOverlay = document.getElementById('review-modal-overlay');
    const closeReviewModalBtn = document.getElementById('close-review-modal-btn');
    // Fix: Cast reviewForm to HTMLFormElement to use methods like 'reset'.
    const reviewForm = document.getElementById('review-form') as HTMLFormElement;
    const reviewModalTitle = document.getElementById('review-modal-title');
    // Fix: Cast reviewIdInput to HTMLInputElement to access its 'value'.
    const reviewIdInput = document.getElementById('review-id-input') as HTMLInputElement;

    const openReviewModal = async (reviewToEdit = null) => {
        const currentUser = await backendApi.getCurrentUser();
        if (!currentUser) {
            showToast("Please log in to manage reviews.");
            // onAuthStateChanged will have already shown the main auth modal, so we just exit.
            return;
        }
        // Fix: Cast elements to HTMLInputElement/HTMLTextAreaElement to set their 'value'.
        (document.getElementById('reviewer-name') as HTMLInputElement).value = currentUser.name;
        (document.getElementById('reviewer-email') as HTMLInputElement).value = currentUser.email;

        if(reviewToEdit) {
            reviewModalTitle.textContent = "Edit Your Review";
            reviewIdInput.value = reviewToEdit.id;
            (document.getElementById('review-text') as HTMLTextAreaElement).value = reviewToEdit.text;
            reviewForm.querySelector('button').textContent = "Save Changes";
        } else {
            reviewModalTitle.textContent = "Write Your Review";
            reviewIdInput.value = "";
            (document.getElementById('review-text') as HTMLTextAreaElement).value = "";
            reviewForm.querySelector('button').textContent = "Submit Review";
        }

        reviewModalOverlay.classList.add('is-visible');
        body.classList.add('body-lock');
    };
    const closeReviewModal = () => {
        reviewModalOverlay.classList.remove('is-visible');
        if(!sidebar.classList.contains('is-open') && !document.querySelector('.modal-overlay.is-visible')) {
            body.classList.remove('body-lock');
        }
    };
    writeReviewBtn.addEventListener('click', () => openReviewModal());
    closeReviewModalBtn.addEventListener('click', closeReviewModal);
    reviewModalOverlay.addEventListener('click', (e) => {
        if (e.target === reviewModalOverlay) closeReviewModal();
    });
    
    // --- Book Enquiry Modal ---
    const bookEnquiryBtn = document.getElementById('book-enquiry-btn');
    const bookEnquiryModalOverlay = document.getElementById('book-enquiry-modal-overlay');
    const closeBookEnquiryModalBtn = document.getElementById('close-book-enquiry-modal-btn');
    // Fix: Cast bookEnquiryForm to HTMLFormElement to use methods like 'reset' and FormData constructor.
    const bookEnquiryForm = document.getElementById('book-enquiry-form') as HTMLFormElement;
    const bookEnquirySuccess = document.getElementById('book-enquiry-success');
    const bookEnquiryTitle = document.getElementById('book-enquiry-modal-title');

    const openBookEnquiryModal = () => {
        bookEnquiryModalOverlay.classList.add('is-visible');
        body.classList.add('body-lock');
    };
    const closeBookEnquiryModal = () => {
        bookEnquiryModalOverlay.classList.remove('is-visible');
        if(!sidebar.classList.contains('is-open') && !document.querySelector('.modal-overlay.is-visible')) {
            body.classList.remove('body-lock');
        }
        setTimeout(() => {
            bookEnquiryForm.style.display = 'block';
            bookEnquiryTitle.style.display = 'block';
            bookEnquirySuccess.style.display = 'none';
            bookEnquiryForm.reset();
            // Fix: Cast submit button to HTMLButtonElement to access 'disabled' property and add null check.
            const submitBtn = bookEnquiryForm.querySelector<HTMLButtonElement>('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Enquiry';
            }
        }, 400);
    };
    bookEnquiryBtn.addEventListener('click', openBookEnquiryModal);
    closeBookEnquiryModalBtn.addEventListener('click', closeBookEnquiryModal);
    bookEnquiryModalOverlay.addEventListener('click', (e) => {
        if (e.target === bookEnquiryModalOverlay) closeBookEnquiryModal();
    });
    
    bookEnquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Fix: bookEnquiryForm is now correctly typed for FormData.
        const formData = new FormData(bookEnquiryForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        // Fix: Cast event target to HTMLFormElement to use querySelector and cast button to HTMLButtonElement.
        const submitBtn = (e.target as HTMLFormElement).querySelector<HTMLButtonElement>('button[type="submit"]');
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: json
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status == 200) {
                bookEnquiryForm.style.display = 'none';
                bookEnquiryTitle.style.display = 'none';
                bookEnquirySuccess.style.display = 'block';
                setTimeout(closeBookEnquiryModal, 2500);
            } else {
                console.error(jsonResponse);
                alert('An error occurred: ' + jsonResponse.message);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Enquiry';
                }
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again later.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Enquiry';
            }
        });
    });

    // --- Enrollment Modal ---
    const enrollNowBtn = document.getElementById('enroll-now-btn');
    const enrollmentModalOverlay = document.getElementById('enrollment-modal-overlay');
    const closeEnrollmentModalBtn = document.getElementById('close-enrollment-modal-btn');
    // Fix: Cast enrollmentForm to HTMLFormElement.
    const enrollmentForm = document.getElementById('enrollment-form') as HTMLFormElement;
    const enrollmentSuccess = document.getElementById('enrollment-success');
    const enrollmentTitle = document.getElementById('enrollment-modal-title');

    const openEnrollmentModal = () => {
        enrollmentModalOverlay.classList.add('is-visible');
        body.classList.add('body-lock');
    };
    const closeEnrollmentModal = () => {
        enrollmentModalOverlay.classList.remove('is-visible');
        if(!sidebar.classList.contains('is-open') && !document.querySelector('.modal-overlay.is-visible')) {
            body.classList.remove('body-lock');
        }
        setTimeout(() => {
            enrollmentForm.style.display = 'block';
            enrollmentTitle.style.display = 'block';
            enrollmentSuccess.style.display = 'none';
            enrollmentForm.reset();
            // Fix: Cast submit button to HTMLButtonElement and add null check.
            const submitBtn = enrollmentForm.querySelector<HTMLButtonElement>('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enroll Now';
            }
        }, 400);
    };
    enrollNowBtn.addEventListener('click', openEnrollmentModal);
    closeEnrollmentModalBtn.addEventListener('click', closeEnrollmentModal);
    enrollmentModalOverlay.addEventListener('click', (e) => {
        if (e.target === enrollmentModalOverlay) closeEnrollmentModal();
    });
    
    enrollmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Fix: enrollmentForm is now correctly typed for FormData.
        const formData = new FormData(enrollmentForm);
        // Fix: Cast event target to HTMLFormElement and button to HTMLButtonElement.
        const submitBtn = (e.target as HTMLFormElement).querySelector<HTMLButtonElement>('button[type="submit"]');
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
        }

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status == 200) {
                enrollmentForm.style.display = 'none';
                enrollmentTitle.style.display = 'none';
                enrollmentSuccess.style.display = 'block';
                setTimeout(closeEnrollmentModal, 2500);
            } else {
                console.error(jsonResponse);
                alert('An error occurred: ' + jsonResponse.message);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enroll Now';
                }
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again later.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enroll Now';
            }
        });
    });
    
    // --- Custom Cursor ---
    // Fix: Cast cursor and follower to HTMLElement to access their 'style' property.
    const cursor = document.querySelector<HTMLElement>('.cursor');
    const follower = document.querySelector<HTMLElement>('.cursor-follower');
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;
    const friction = 0.1; 
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    function animateCursor() {
        let dx = mouseX - followerX;
        let dy = mouseY - followerY;
        followerX += dx * friction;
        followerY += dy * friction;
        if (cursor) cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        if (follower) follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    document.body.addEventListener('mouseenter', (e) => {
        // Fix: Cast event target to Element to use the 'matches' method.
        if ((e.target as Element).matches('a, button, label, .magnetic-link, input[type="checkbox"]')) {
             body.classList.add('cursor-hover');
        }
    }, true);
     document.body.addEventListener('mouseleave', (e) => {
        // Fix: Cast event target to Element to use the 'matches' method.
        if ((e.target as Element).matches('a, button, label, .magnetic-link, input[type="checkbox"]')) {
             body.classList.remove('cursor-hover');
        }
    }, true);


    // --- Magnetic Links ---
    function addMagneticEffect(link) {
        link.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Fix: Use declared 'gsap' global variable.
            gsap.to(this, { x: x * 0.3, y: y * 0.3, duration: 0.7, ease: 'power4.out' });
        });
        link.addEventListener('mouseleave', function() {
            // Fix: Use declared 'gsap' global variable.
            gsap.to(this, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
        });
    }
    
    // --- Card Hover Effect ---
    // Fix: Cast card to HTMLElement and event to MouseEvent for type safety.
    document.querySelectorAll<HTMLElement>('.course-card, .expert-card, .more-course-card, .note-card').forEach(card => {
        card.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    // --- Testimonial Slider ---
    const slidesContainer = document.getElementById('testimonial-slides-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let allReviews = [], currentIndex = 0, totalSlides = 0;

    function renderReviews(reviews) {
        if (!slidesContainer) return;

        // Determine if a new review was added to reset the slider position
        const isNewReviewAdded = reviews.length > allReviews.length && allReviews.length > 0;
        
        allReviews = reviews;
        slidesContainer.innerHTML = '';

        if (allReviews.length === 0) {
            slidesContainer.innerHTML = `<div class="testimonial-card"><p>No reviews yet. Be the first to write one!</p></div>`;
            totalSlides = 0;
            return;
        }

        allReviews.forEach(review => {
            const slide = document.createElement('div');
            slide.className = 'testimonial-card';
            slide.innerHTML = `
                <blockquote>"${review.text}"</blockquote>
                <p class="author">- ${review.name}</p>`;
            slidesContainer.appendChild(slide);
        });

        totalSlides = allReviews.length;

        if (isNewReviewAdded) {
            // If a new review comes in, reset slider to show it
            currentIndex = 0;
        } else if (currentIndex >= totalSlides) {
            // If reviews were deleted, adjust index
            currentIndex = totalSlides > 0 ? totalSlides - 1 : 0;
        }

        updateSlider();
    }

    function updateSlider() { if (slidesContainer) slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`; }
    nextBtn.addEventListener('click', () => { if (totalSlides > 0) currentIndex = (currentIndex + 1) % totalSlides; updateSlider(); });
    prevBtn.addEventListener('click', () => { if (totalSlides > 0) currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateSlider(); });
    
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const currentUser = await backendApi.getCurrentUser();
        if (!currentUser) {
            showToast("Login session expired. Please log in again.");
            return;
        }
        // Fix: Cast elements to access their 'value' property.
        const text = (document.getElementById('review-text') as HTMLTextAreaElement).value.trim();
        const reviewId = reviewIdInput.value || null;
        
        if (!text) {
            showToast("Review cannot be empty.");
            return;
        }

        // Fix: Cast event target and button for type safety.
        const submitBtn = (e.target as HTMLFormElement).querySelector<HTMLButtonElement>('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = reviewId ? 'Saving...' : 'Submitting...';
        }

        try {
            const reviewData = {
                id: reviewId,
                name: currentUser.name,
                email: currentUser.email,
                userId: currentUser.uid,
                text
            };
            
            // Send email notification for new/edited review
            const originalReviewText = reviewId ? allReviews.find(r => r.id === reviewId)?.text : '';
            const emailSubject = reviewId ? "Review Updated on MCS Website" : "New Review Submitted on MCS Website";
            const emailMessage = `
                A review has been ${reviewId ? 'updated' : 'submitted'}:
                Name: ${currentUser.name}
                Email: ${currentUser.email}
                Username: @${currentUser.username}
                ${reviewId ? `\nOriginal Review:\n${originalReviewText}` : ''}
                \n\n${reviewId ? 'Updated' : ''} Review:\n${text}
            `;
            const emailFormData = new FormData();
            emailFormData.append("access_key", "b1ed0600-7eea-4d87-a55d-712e1813c95c");
            emailFormData.append("subject", emailSubject);
            emailFormData.append("from_name", currentUser.name);
            emailFormData.append("email_to", "mcsinstitute395@gmail.com");
            emailFormData.append("message", emailMessage);

            fetch('https://api.web3forms.com/submit', { method: 'POST', body: emailFormData })
                .catch(err => console.error("Failed to send review notification email:", err));

            // Save review. The real-time listener will update the UI for all clients.
            await backendApi.saveReview(reviewData);
            
            reviewForm.reset();
            closeReviewModal();
            showToast(reviewId ? "Review updated successfully!" : "Thank you for your review!");

            if (reviewHistoryModalOverlay.classList.contains('is-visible')) {
                // Fix: Call showReviewHistory without arguments.
                await showReviewHistory();
            }

        } catch (error) {
            showToast("An error occurred. Please try again.");
            console.error("Review submission error:", error);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = reviewId ? 'Save Changes' : 'Submit Review';
            }
        }
    });
    
    // --- Review History Modal ---
    const reviewHistoryModalOverlay = document.getElementById('review-history-modal-overlay');
    const closeReviewHistoryBtn = document.getElementById('close-review-history-modal-btn');
    const reviewHistoryList = document.getElementById('review-history-list');

    // Fix: Make the event parameter optional to allow calling without arguments.
    async function showReviewHistory(e?: Event) {
        if (e) e.preventDefault();
        const currentUser = await backendApi.getCurrentUser();
        if (!currentUser) return;
        
        // Use the one-time fetch for review history to avoid listener complexity here.
        const allUserReviews = await backendApi.getReviews(); 
        const userReviews = allUserReviews.filter(review => review.email === currentUser.email);
        reviewHistoryList.innerHTML = ''; 

        if (userReviews.length > 0) {
            userReviews.forEach(review => {
                const item = document.createElement('div');
                item.className = 'review-history-item';
                const reviewDate = review.createdAt ? new Date(review.createdAt.seconds * 1000).toLocaleDateString() : 'a while ago';
                item.innerHTML = `
                    <div class="review-history-item-content">
                        <blockquote>"${review.text}"</blockquote>
                        <div class="date">Posted on ${reviewDate}</div>
                    </div>
                    <div class="review-history-item-actions">
                         <button class="edit-review-btn magnetic-link" data-id="${review.id}" aria-label="Edit review">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                            </svg>
                        </button>
                    </div>
                `;
                reviewHistoryList.appendChild(item);
            });
            
            // Add listeners for edit buttons
            document.querySelectorAll<HTMLElement>('.edit-review-btn').forEach(btn => {
                btn.addEventListener('click', async () => {
                    const reviewId = btn.dataset.id;
                    const reviewToEdit = userReviews.find(r => r.id === reviewId); // Fix: Search in the correct array
                    if(reviewToEdit) {
                       openReviewModal(reviewToEdit);
                    }
                });
            });

            document.querySelectorAll('.review-history-item .magnetic-link').forEach(addMagneticEffect);

        } else {
            reviewHistoryList.innerHTML = '<p>You have not submitted any reviews yet.</p>';
        }

        if (!reviewHistoryModalOverlay.classList.contains('is-visible')) {
            reviewHistoryModalOverlay.classList.add('is-visible');
            body.classList.add('body-lock');
            closeSidebar();
        }
    }
    
    closeReviewHistoryBtn.addEventListener('click', () => {
        reviewHistoryModalOverlay.classList.remove('is-visible');
        if (!document.querySelector('.modal-overlay.is-visible')) {
            body.classList.remove('body-lock');
        }
    });
    reviewHistoryModalOverlay.addEventListener('click', e => {
        if (e.target === reviewHistoryModalOverlay) {
            reviewHistoryModalOverlay.classList.remove('is-visible');
            if (!document.querySelector('.modal-overlay.is-visible')) {
                body.classList.remove('body-lock');
            }
        }
    });
    
    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));

    // --- WebGL Wave Background ---
    let scene, camera, renderer, uniforms;
    function initWebGL() {
        const canvas = document.getElementById('webgl-canvas');
        // Fix: Access THREE via the declared global variable.
        // FIX: Check for the global 'THREE' variable directly, as 'window.THREE' can cause TypeScript errors.
        if (!canvas || !THREE) return;
        
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        const geometry = new THREE.PlaneGeometry(5, 5, 128, 128);
        uniforms = { u_time: { type: 'f', value: 0.0 } };
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: `
                uniform float u_time; varying vec2 vUv; varying float v_height;
                void main() {
                    vUv = uv; vec3 pos = position;
                    pos.z += sin(pos.x * 20.0 + u_time) * 0.05;
                    pos.z += sin(pos.y * 20.0 + u_time) * 0.05;
                    pos.z += (sin(length(uv - 0.5) * 20.0 + u_time) * 0.1);
                    v_height = pos.z;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying float v_height;
                void main() {
                    vec3 color1 = vec3(0.54, 0.17, 0.89); vec3 color2 = vec3(0.29, 0.0, 0.51);
                    float mixValue = (v_height + 0.2) * 2.0;
                    vec3 finalColor = mix(color1, color2, mixValue);
                    gl_FragColor = vec4(finalColor, 0.5 + v_height * 2.0);
                }
            `,
            wireframe: true, transparent: true
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh); mesh.rotation.x = -0.5;
        window.addEventListener('resize', onWindowResize, false);
        animateWebGL();
    }
    function onWindowResize() {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animateWebGL() {
        if (!renderer || !scene || !camera) return;
        requestAnimationFrame(animateWebGL);
        if(uniforms) uniforms.u_time.value += 0.01;
        renderer.render(scene, camera);
    }

    // --- AI Chatbot ---
    function initializeChatbot() {
        const chatFab = document.getElementById('chat-fab') as HTMLButtonElement;
        const chatContainer = document.getElementById('chat-container') as HTMLElement;
        const chatMessages = document.getElementById('chat-messages') as HTMLElement;
        const chatForm = document.getElementById('chat-form') as HTMLFormElement;
        const chatInput = document.getElementById('chat-input') as HTMLInputElement;
        const chatCloseBtn = document.getElementById('chat-close-btn') as HTMLButtonElement;
        const languageSelector = document.getElementById('chat-language-selector') as HTMLElement;
        const personaSelector = document.getElementById('chat-persona-selector') as HTMLElement;

        let chat: Chat | null = null;
        let isChatOpen = false;
        let isInitializing = false;
        
        const getSelectedValue = (selector: HTMLElement): string => {
            return selector.querySelector('.custom-select-trigger span').getAttribute('data-value');
        };
        const getSelectedText = (selector: HTMLElement): string => {
            return selector.querySelector('.custom-select-trigger span').textContent;
        };

        const getWelcomeMessage = (currentUser: any) => {
            const lang = getSelectedValue(languageSelector);
            const persona = getSelectedText(personaSelector);
            const userName = currentUser ? `, ${currentUser.name}` : '';

            const messages = {
                'English': `Hello${userName}! I'm ${persona}, the MCS AI Assistant. How can I help you today?`,
                'Roman English': `Namaste${userName}! Main ${persona}, MCS AI assistant hoon. Main aaj aapki kaise madad kar sakta hoon?`,
                'Hindi': `नमस्ते${userName}! मैं ${persona}, MCS AI असिस्टेंट हूँ। मैं आज आपकी कैसे मदद कर सकता हूँ?`
            };
            return messages[lang] || messages['English'];
        };
        
        const appendMessage = (text: string, sender: 'user' | 'ai' | 'system', isTyping: boolean = false) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', `${sender}-message`);

            if (isTyping) {
                messageElement.id = 'typing-indicator';
                messageElement.innerHTML = `
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                `;
            } else {
                const formattedText = text
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*/g, '')
                    .replace(/\n/g, '<br>');
                messageElement.innerHTML = formattedText;
            }
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };
        
        const reinitializeChat = async () => {
            if (isInitializing) return;
            isInitializing = true;
            
            const wasFirstInit = !chat;
            if(!wasFirstInit) {
                appendMessage(`Switching settings...`, 'system');
            }

            try {
                const oldHistory = chat ? await chat.getHistory() : [];
                const currentUser = await backendApi.getCurrentUser();
                const selectedLanguage = getSelectedValue(languageSelector);
                const selectedPersona = getSelectedValue(personaSelector);
                const userName = currentUser ? currentUser.name : 'the student';
                
                let personaInstruction = "";
                switch (selectedPersona) {
                    case 'nazli':
                        personaInstruction = "You are Nazli Mam, a friendly, warm, and helpful guide at MCS Institute. Your persona is approachable and encouraging, like a supportive teacher.";
                        break;
                    case 'bilal':
                        personaInstruction = `You are Bilal Sir, a friendly and knowledgeable mentor at MCS Institute. Your persona is helpful and encouraging.`;
                        break;
                    case 'sajid':
                    default:
                        personaInstruction = "You are Sajid Raza, the Director of MCS Institute. Your persona is professional, knowledgeable, and authoritative.";
                        break;
                }
                
                let languageInstruction = `You MUST respond in ${selectedLanguage}.`;
                if(selectedLanguage === 'Roman English') {
                    languageInstruction = "You MUST respond in Roman English (e.g., 'Aap kaise ho?')."
                }

                const websiteGuideInstruction = `
                    You are also an expert guide for our website. When asked about the website, explain its features step-by-step. Key features include:
                    - **Header & Navigation:** A login button and a menu icon on the right which opens a sidebar for navigation. Logged-in users see their profile icon.
                    - **Hero Section:** The main welcome area with 'Enroll Now' and 'Book Enquiry' buttons.
                    - **Course Sections:** '#top-courses', '#more-courses', and '#notes' for course info and PDF downloads.
                    - **Interactive Modals:** We have pop-up forms for Enrollment, Enquiries, Reviews, and Login/Signup.
                    - **User Profile:** Logged-in users can access their profile from the sidebar to update their picture and view their 'Review History'.
                `;

                const communicationStyleInstruction = `
                    **Communication Style:**
                    - **Concise & Organized:** Your responses MUST be clear, concise, and well-organized. Use bullet points or numbered lists and markdown bolding (e.g., **ADCA**) to structure information effectively. AVOID long paragraphs.
                    - **Personalization:** You are speaking with ${userName}. Address them by their name occasionally to make the conversation personal and engaging.
                `;

                const systemInstruction = `
                    ${personaInstruction} 
                    As an AI assistant for a computer training center, your primary goal is to answer student questions about our courses (like ADCA, DCA, Web Development), enrollment, and general computer science topics.
                    ${websiteGuideInstruction}
                    ${communicationStyleInstruction}
                    ${languageInstruction}
                `;

                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                chat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    history: oldHistory,
                    config: { systemInstruction }
                });

                chatMessages.innerHTML = ''; // Clear chat on switch for a clean state
                
                if (wasFirstInit) {
                    appendMessage(getWelcomeMessage(currentUser), 'ai');
                } else {
                    const personaName = getSelectedText(personaSelector);
                    appendMessage(`You are now chatting with ${personaName}.`, 'system');
                }

            } catch (error) {
                console.error("Error re-initializing chat:", error);
                document.getElementById('typing-indicator')?.remove();
                appendMessage("Sorry, there was an error switching the AI persona. Please try again.", 'ai');
            } finally {
                isInitializing = false;
            }
        };

        const openChat = () => {
            if (isChatOpen) return;
            isChatOpen = true;
            chatContainer.classList.add('is-visible');
            chatFab.style.opacity = '0';
            chatFab.style.pointerEvents = 'none';
            
            if (!chat) {
                reinitializeChat().then(() => chatInput.focus());
            } else {
                chatInput.focus();
            }
        };

        const closeChat = () => {
            if (!isChatOpen) return;
            isChatOpen = false;
            chatContainer.classList.remove('is-visible');
            chatFab.style.opacity = '1';
            chatFab.style.pointerEvents = 'auto';
        };

        const handleChatSubmit = async (e: Event) => {
            e.preventDefault();
            if (isInitializing) {
                showToast("Please wait, AI is switching modes...");
                return;
            }
            const userInput = chatInput.value.trim();
            if (!userInput || !chat) return;

            appendMessage(userInput, 'user');
            chatInput.value = '';
            appendMessage('', 'ai', true);

            try {
                const response = await chat.sendMessage({ message: userInput });
                const aiResponse = response.text;
                
                document.getElementById('typing-indicator')?.remove();
                appendMessage(aiResponse, 'ai');

            } catch (error) {
                console.error("Gemini API Error:", error);
                document.getElementById('typing-indicator')?.remove();
                appendMessage("Sorry, I'm having a little trouble connecting right now. Please try again in a moment.", 'ai');
            }
        };
        
        // --- Custom Select Logic ---
        function setupCustomSelect(selectorElement: HTMLElement) {
            const trigger = selectorElement.querySelector('.custom-select-trigger') as HTMLElement;
            const options = selectorElement.querySelectorAll('.custom-option');
            
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const wasOpen = selectorElement.classList.contains('is-open');
                // Close all open selects first
                document.querySelectorAll('.custom-select-wrapper.is-open').forEach(openSelect => {
                    openSelect.classList.remove('is-open');
                });
                // If it wasn't already open, open it
                if (!wasOpen) {
                    selectorElement.classList.add('is-open');
                }
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedValue = option.getAttribute('data-value');
                    const selectedText = option.textContent;

                    // Update trigger text and value
                    const triggerSpan = trigger.querySelector('span');
                    triggerSpan.textContent = selectedText;
                    triggerSpan.setAttribute('data-value', selectedValue);
                    
                    // Update 'selected' class
                    options.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');

                    selectorElement.classList.remove('is-open');
                    
                    // Re-initialize chat with new settings
                    reinitializeChat();
                });
            });
        }
        
        setupCustomSelect(languageSelector);
        setupCustomSelect(personaSelector);

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.custom-select-wrapper.is-open').forEach(openSelect => {
                openSelect.classList.remove('is-open');
            });
        });

        chatFab.addEventListener('click', openChat);
        chatCloseBtn.addEventListener('click', closeChat);
        chatForm.addEventListener('submit', handleChatSubmit);
    }


    // --- App Initialization ---
    async function initializeApp() {
        // onAuthStateChanged listener is now the single point of entry for auth logic,
        // so no need to call an initAuth function here. It will run automatically.
        
        // Run getReviews once to handle potential seeding of default reviews if the collection is empty.
        await backendApi.getReviews();
        // Then, attach the real-time listener which will handle the initial render and all subsequent updates.
        backendApi.listenForReviews(renderReviews);
        initWebGL();
        initializeChatbot();
    }
    
    initializeApp();
});
