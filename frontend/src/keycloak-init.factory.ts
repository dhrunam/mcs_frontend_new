// // import { KeycloakService } from "keycloak-angular";
// import { environment } from "./environment/environment";

// export function initializeKeycloak(keycloak: KeycloakService) {

//     return () =>
//         keycloak.init({
//             config: {
//                 url: environment.keycloak.url,
//                 realm: environment.keycloak.realm,
//                 clientId: environment.keycloak.clientId,
//             },
//             initOptions: {
//                 onLoad:'login-required', //'check-sso',
//                 flow: "standard",          
//                 // silentCheckSsoRedirectUri:
//                 //     window.location.origin + '/assets/silent-check-sso.html'
//             }
//         });
// }