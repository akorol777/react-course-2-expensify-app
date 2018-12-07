import React from 'react';
import {Link} from 'react-router-dom';

// Link - ссылка без перезагрузки страницы
const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;