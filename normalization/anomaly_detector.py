def detect_suspicious(activity, value, unit):

    reasons = []

    if value < 0:

        reasons.append("Negative quantity")

    if value > 10000:

        reasons.append("Unusually high quantity")

    if unit.upper() not in ['L','KL']:

        reasons.append("Unknown unit")

    return reasons