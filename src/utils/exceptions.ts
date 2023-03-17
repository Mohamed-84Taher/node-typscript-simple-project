import { ApiException } from "@/types/exceptions";

class Exception implements ApiException {
  constructor(readonly error: any, readonly status: number) {}
}

/**
 * Not found exception
 */
export class NotFoundException extends Exception {
  constructor(error: any) {
    super(error, 404);
  }
}

/**
 * Bad Request exception
 */
export class BadRequestException extends Exception {
  constructor(error: any) {
    super(error, 400);
  }
}
