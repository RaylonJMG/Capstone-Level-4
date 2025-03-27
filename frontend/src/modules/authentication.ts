import { logins } from "./logins";

//RETURNS TRUE IF THE EMAIL AND PASSWORD MATCHES A LOGIN
// RETURNS FALSE IF THE EMAIL AND PASSWORD DO NOT MATCH A LOGIN

export function authentication(email: string, password: string) {
	for (const login of logins) {
		debugger;
		const currentEmail = login.email;
		const currentPassword = login.password;
		if (currentEmail === email && currentPassword === password) return true;
	}
	return false;
}
