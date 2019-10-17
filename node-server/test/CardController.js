//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block


    describe('/fetch existing card details',()=>{
        it('it should GET all existing card details',(done)=>{
            chai.request(server)
                .get('/card/fetch')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                done();
              });
        })
    })

    describe('/add New card details', () => {
        it('it should POST a Card Details with valid Card number', (done) => {
            let cardDetails={
                name:'Ajay Kumar Gupta',
                cnumber:49927398716,
                climit:1000000,
            };

          chai.request(server)
              .post('/card/add')
              .send(cardDetails)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql(200);
                    res.body.should.have.property('status').eql('success');
                    res.body.should.have.property('message').eql('Card added successfully.');
                done();
              });
        });
        it('it should not POST a Card Details without valid Card number', (done) => {
            let cardDetails={
                name:'Ajay Kumar Gupta',
                cnumber:1234567890,
                climit:1000000,
            };

          chai.request(server)
              .post('/card/add')
              .send(cardDetails)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql(200);
                    res.body.should.have.property('status').eql('fail');
                    res.body.should.have.property('message').eql('Card validation failed, please enter correct card number!');
                done();
              });
        });
    });