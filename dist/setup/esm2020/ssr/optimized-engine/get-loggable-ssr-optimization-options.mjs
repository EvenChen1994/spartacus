/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Helper function that maps optimization options to primitive values.
 * This is useful for logging and monitoring purposes.
 *
 * @param value optimization options that should be logged
 * @returns options containing only primitive values that are easier to read by developers and monitoring tools
 */
export const getLoggableSsrOptimizationOptions = (value) => {
    const newValue = { ...value };
    Object.keys(value).forEach((key) => {
        if (isClassInstance(newValue[key])) {
            newValue[key] = newValue[key].constructor?.name;
        }
        if (typeof newValue[key] === 'function') {
            newValue[key] = newValue[key].toString();
        }
    });
    return newValue;
};
/**
 * Checks if the given value is a class instance,
 * but not a plain Object.
 *
 * @private
 */
const isClassInstance = (value) => {
    return typeof value === 'object' && value.constructor !== Object;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWxvZ2dhYmxlLXNzci1vcHRpbWl6YXRpb24tb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUtbGlicy9zZXR1cC9zc3Ivb3B0aW1pemVkLWVuZ2luZS9nZXQtbG9nZ2FibGUtc3NyLW9wdGltaXphdGlvbi1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFJSDs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FBRyxDQUMvQyxLQUE2QixFQUM3QixFQUFFO0lBQ0YsTUFBTSxRQUFRLEdBQXdCLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztTQUNqRDtRQUNELElBQUksT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ3ZDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFVLEVBQVcsRUFBRTtJQUM5QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQztBQUNuRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBTc3JPcHRpbWl6YXRpb25PcHRpb25zIH0gZnJvbSAnLi9zc3Itb3B0aW1pemF0aW9uLW9wdGlvbnMnO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IG1hcHMgb3B0aW1pemF0aW9uIG9wdGlvbnMgdG8gcHJpbWl0aXZlIHZhbHVlcy5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBsb2dnaW5nIGFuZCBtb25pdG9yaW5nIHB1cnBvc2VzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBvcHRpbWl6YXRpb24gb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBsb2dnZWRcbiAqIEByZXR1cm5zIG9wdGlvbnMgY29udGFpbmluZyBvbmx5IHByaW1pdGl2ZSB2YWx1ZXMgdGhhdCBhcmUgZWFzaWVyIHRvIHJlYWQgYnkgZGV2ZWxvcGVycyBhbmQgbW9uaXRvcmluZyB0b29sc1xuICovXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2FibGVTc3JPcHRpbWl6YXRpb25PcHRpb25zID0gKFxuICB2YWx1ZTogU3NyT3B0aW1pemF0aW9uT3B0aW9uc1xuKSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0geyAuLi52YWx1ZSB9O1xuICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGlzQ2xhc3NJbnN0YW5jZShuZXdWYWx1ZVtrZXldKSkge1xuICAgICAgbmV3VmFsdWVba2V5XSA9IG5ld1ZhbHVlW2tleV0uY29uc3RydWN0b3I/Lm5hbWU7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV3VmFsdWVba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbmV3VmFsdWVba2V5XSA9IG5ld1ZhbHVlW2tleV0udG9TdHJpbmcoKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBjbGFzcyBpbnN0YW5jZSxcbiAqIGJ1dCBub3QgYSBwbGFpbiBPYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaXNDbGFzc0luc3RhbmNlID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgIT09IE9iamVjdDtcbn07XG4iXX0=