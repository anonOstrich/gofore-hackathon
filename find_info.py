from openpyxl import load_workbook

def name_xlsx_to_dict(filename):
    dict = {}
    book = load_workbook(filename)
    idxs = [1,4]
    for sheet_index in idxs:
        sheet = book.worksheets[sheet_index]
        for row in sheet.iter_rows(min_row=2, min_col=1, max_row=10000, max_col=2):
            if row[0].value == None:
                break
            this_name = row[0].value.lower()
            this_count = row[1].value
            if dict.get(this_name) != None:
                if dict[this_name] < this_count:
                    dict[this_name] = this_count
            else:
                dict[this_name] = this_count
    return dict

def family_xlsx_to_dict(filename):
    family_list = []
    book = load_workbook(filename)
    sheet = book.worksheets[0]
    for row in sheet.iter_rows(min_row=6, min_col=3, max_row=112, max_col=12):
        info = []
        sum = row[1].value
        for idx, cell in enumerate(row):
            if idx >= 2:
                percentage = float(cell.value)/sum * 100
                info.append(percentage)
        family_list.append(info)
    return family_list
