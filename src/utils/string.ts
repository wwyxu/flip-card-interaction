export const concatDescription = (description: string) => {
    return description.replace(/<\/?p[^>]*>/g, "");
};
