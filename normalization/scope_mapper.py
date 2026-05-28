def map_scope(activity):

    activity = activity.lower()

    if activity in ['diesel','petrol']:

        return 'Scope1'

    return 'Unknown'