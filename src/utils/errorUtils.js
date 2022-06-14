export const serviceErrorToStatusCode = {
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	conflict: 409,
	unprocessable: 422,
  };

export function notFoundError(entity) {
	return {
		type: "notFound",
		message: `Could not find specified "${entity}"!`
	};
}