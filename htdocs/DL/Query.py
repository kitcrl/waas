#query
# id=boardid.lvu.total_rows.rows_per_page.....
# id=0.list.1223.10.10
class CQuery :
    def __init__(self):
        self.qid = 'id';

    def value(self, qry, d, whch) :
        rqry = qry.split(d, whch+1);
        return rqry[whch];

    def query(self, qry, d='=', whch=1) :
        return self.value(qry, d, whch);

    def parsing_query(self, qry) :
        self.qid         = self.query(qry, '=', 0);
        self.qry         = self.query(qry, '=', 1);
        
    