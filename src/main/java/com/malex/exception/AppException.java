package com.malex.exception;

import javax.annotation.Nonnull;

import static java.lang.String.format;

public class AppException extends RuntimeException {

    private final Object[] msgArgs;

    public AppException(@Nonnull final String messageTemplate, @Nonnull final Object... msgArgs) {
        super(messageTemplate);
        this.msgArgs = msgArgs;
    }

    @Override
    public String getMessage() {
        return format(super.getMessage(), msgArgs);
    }

}
