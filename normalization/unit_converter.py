def normalize_quantity(value, unit):

    value = float(value)

    unit = unit.upper()

    if unit == 'KL':

        return value * 1000, 'L'

    elif unit == 'L':

        return value, 'L'

    else:

        return value, unit