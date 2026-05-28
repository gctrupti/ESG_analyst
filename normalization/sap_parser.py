import csv
import io


def parse_sap_csv(file):

    file.seek(0)

    decoded_file = io.StringIO(
        file.read().decode('utf-8')
    )

    reader = csv.DictReader(decoded_file)

    return list(reader)