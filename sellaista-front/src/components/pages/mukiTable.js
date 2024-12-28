import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MukiTable.css'; // Oletetaan, että tyylit on tallennettu tähän tiedostoon.

function MukiTable() {
  const [mukit, setMukit] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Nykyinen sivu
  const itemsPerPage = 10; // Näytettävien mukien määrä per sivu

  // Hakee mukit tietokannasta
  useEffect(() => {
    fetch('http://localhost:5000/api/mukit')
      .then(response => response.json())
      .then(data => setMukit(data))
      .catch(error => console.error('Virhe tietoja haettaessa:', error));
  }, []);

  // Poistaa mukin
  const handleDeleteMuki = (id) => {
    fetch(`http://localhost:5000/api/mukit/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setMukit(mukit.filter(muki => muki.id !== id));
          setDeleteSuccess(true);
        }
      })
      .catch(error => console.error('Virhe mukin poistamisessa:', error));
  };

  // Lasketaan näytettävien mukien aloitus- ja lopetusindeksit
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMukit = mukit.slice(indexOfFirstItem, indexOfLastItem);

  // Sivujen lukumäärä
  const totalPages = Math.ceil(mukit.length / itemsPerPage);

  // Päivitetään nykyinen sivu
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Rendersoi mukien taulukko
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col col-sm-5 col-xs-12">
                  <h4 className="title">Muumi-mukit</h4>
                </div>
                <div className="col-sm-7 col-xs-12 text-right">
                  <Link to="/mukit/uusi" className="btn btn-primary btn-sm">
                    <i className="fa fa-plus"></i> Lisää uusi muki
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel-body table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nimi</th>
                    <th>Kuvaus</th>
                    <th>Ostohinta (€)</th>
                    <th>Nykyinen hinta (€)</th>
                    <th>Kokoelmassa</th>
                    <th>Kuva</th>
                    <th>Toiminnot</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMukit.map((muki) => (
                    <tr key={muki.id}>
                      <td>{muki.id}</td>
                      <td>{muki.nimi}</td>
                      <td>{muki.kuvaus}</td>
                      <td>{muki.ostohinta}</td>
                      <td>{muki.hintanyt}</td>
                      <td>{muki.kokoelmassa ? 'Kyllä' : 'Ei'}</td>
                      <td>
                        <img src={muki.kuvalinkki} alt={muki.nimi} className="user_icon" />
                      </td>
                      <td>
                        <Link to={`/mukit/${muki.id}`} className="btn btn-info btn-sm">
                          <em className="fa fa-edit"></em> Muokkaa
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteMuki(muki.id)}>
                          <em className="fa fa-trash"></em> Poista
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <div className="row">
                <div className="col col-xs-6">
                  Näytetään <b>{currentMukit.length}</b> mukia, yhteensä {mukit.length}
                </div>
                <div className="col-xs-6">
                  <ul className="pagination hidden-xs pull-right">
                    <li className={currentPage === 1 ? 'disabled' : ''}>
                      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <i className="fa fa-angle-double-left"></i>
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li key={index + 1} className={currentPage === index + 1 ? 'active' : ''}>
                        <button onClick={() => handlePageChange(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li className={currentPage === totalPages ? 'disabled' : ''}>
                      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <i className="fa fa-angle-double-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MukiTable;
