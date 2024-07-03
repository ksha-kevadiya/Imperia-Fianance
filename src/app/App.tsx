import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { AUTH_LOCAL_STORAGE_KEY, AuthInit, useAuth } from './modules/auth'
import { ThemeModeProvider } from '../_metronic/partials'
import Swal from 'sweetalert2'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { logout } = useAuth()
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === '/terms_condition' || location.pathname === '/privacy_policy' || location.pathname === '/delete_account' || location.pathname === '/about_app') {
      return;
    }


    let logoutTimer: NodeJS.Timeout;
    let countdownIntervalreset: NodeJS.Timeout;

    const LOGOUT_TIMER = 1 * 60 * 1000;
    const IDLE_TIMEOUT = 14 * 60 * 1000;

  
    if (localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)) {
      setIsAuthenticated(true);
    }

    const logoutUser = () => {
      localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
      setIsAuthenticated(false);
      logout()
    };

    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        let remainingTime = LOGOUT_TIMER / 1000;

        const countdownInterval = setInterval(() => {
          remainingTime--;
          const buttonText = `Stay Sign In (${remainingTime}s)`;
          if (isAuthenticated) {
            Swal.update({
              confirmButtonText: buttonText,
            });
          }
          if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            Swal.close();
            logoutUser();
          }
        }, 1000);

        if (isAuthenticated) {
          Swal.fire({
            title: "Session Timeout",
            html: "This session will be automatically destroyed if there is no user interaction for a long time. Please click on <b>Stay Logged In</b> to keep start interacting.",
            showCancelButton: true,
            confirmButtonText: `Stay Sign In (${remainingTime}s)`,
            cancelButtonText: "Sign Out",
            confirmButtonColor: "#f6c000",
            cancelButtonColor: "#000000",
            allowOutsideClick: false,
            customClass: {
              container: 'swal2-zindex',
              confirmButton: 'swal2-confirm-btn',
            }
          }).then((result: any) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
              logoutUser()
            } else if (result.isConfirmed && result.dismiss === Swal.DismissReason.close) {
              clearInterval(countdownInterval);
              resetLogoutTimer();
            } else {
              clearInterval(countdownInterval);
              resetLogoutTimer();
            }
          });
        }
      }, IDLE_TIMEOUT);
    };

    resetLogoutTimer();

    const resetTimerOnUserActivity = () => {
      clearTimeout(logoutTimer);
      clearInterval(countdownIntervalreset);
      resetLogoutTimer();
    };

    document.addEventListener("mousemove", resetTimerOnUserActivity);
    document.addEventListener("keydown", resetTimerOnUserActivity);

    return () => {
      clearTimeout(logoutTimer);
      clearInterval(countdownIntervalreset);
      document.removeEventListener("mousemove", resetTimerOnUserActivity);
      document.removeEventListener("keydown", resetTimerOnUserActivity);
    };
  }, [isAuthenticated, logout]);




  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <ThemeModeProvider>
            <AuthInit>
              <Outlet />
              <MasterInit />
            </AuthInit>
          </ThemeModeProvider>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }