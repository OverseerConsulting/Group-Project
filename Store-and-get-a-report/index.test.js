const routes = require('./routes/api');
const Potter = require('../models/harrypotternames');

test(' get from data base', () => {
    expect(router.get('/potter', function(req, res) {
    Potter.find({ name : Cho}).toBe('{"_id":"5c73ff4db651a930c4ac80fc","Name":"Cho","Score":1}');
    }
})));