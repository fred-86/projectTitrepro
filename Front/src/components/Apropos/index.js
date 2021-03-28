// Import npm
import React, { useEffect } from 'react';

// Import local
import NavBar from '../NavBar';

const Apropos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <section className="Apropos">
        <article className="Apropos__article">
          <h1 className="Apropos__article-title">Incidunt exercitationem</h1>
          <h2 className="Apropos__article-title--2">Modi neque repellendus reiciendis maiores</h2>
          <p className="Apropos__article-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis nisi quaerat doloribus, vitae laudantium error hic eos tenetur similique ipsum consectetur voluptatem ipsam exercitationem corrupti ea iusto culpa odio!
            Et ab recusandae possimus nobis dolor? Iste, totam. Est fugit ab atque itaque minus, omnis nam quos cum. Necessitatibus velit eaque harum impedit saepe ex maiores! Aperiam amet doloribus voluptatem.
            Vel, alias voluptas itaque laborum repellendus incidunt pariatur esse eligendi nihil, fuga, obcaecati dolores quod architecto eum. Quisquam natus cupiditate, facere, quod quasi libero, recusandae impedit quidem quibusdam nulla accusantium!
            Adipisci dignissimos earum fuga deleniti.
            Sapiente ipsa repudiandae eveniet impedit quia consectetur, odio vero tenetur odit, dolores eligendi ullam explicabo! Unde ea molestias ullam error fuga commodi accusamus delectus iste!
            Incidunt exercitationem expedita sunt itaque? Modi neque repellendus reiciendis maiores a consequatur. Debitis, accusantium. Enim officiis nisi beatae explicabo quis? Eius tempore sapiente ut iure voluptatibus ratione et vero voluptatem.
            Et labore molestias autem nisi consectetur nihil officiis voluptate quisquam, harum, quibusdam quis aliquam tenetur fuga itatibus.
          </p>
          <h2 className="Apropos__article-title--2">Phasellus congue lacinia pretium</h2>
          <p className="Apropos__article-content">
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tortor mi, hendrerit id egestas et, rhoncus eu arcu. Nullam eget elit non nibh venenatis pellentesque sit amet commodo ante. Nullam ultrices turpis sed mi venenatis commodo. Curabitur massa lorem, faucibus et ex et, condimentum mattis ligula.
          </p> 
          <p className="Apropos__article-content">
            Ut vel facilisis est. Mauris neque elit, tempor eu vulputate ac, tempus at libero. In a mauris nulla. Sed placerat diam nisl, sed laoreet neque euismod laoreet. Donec malesuada convallis sagittis. Aliquam erat volutpat. Nunc sed quam felis. Ut laoreet, erat at mollis lobortis, est lectus porttitor lectus, non egestas augue mi vitae enim. Quisque tristique ante eu justo egestas mattis.
          </p>    
          <p className="Apropos__article-content">
            Donec lobortis porta erat, eget congue odio bibendum at. Suspendisse potenti. Sed ac fringilla est, nec placerat odio. Nulla imperdiet interdum erat, eget iaculis diam varius nec. Proin vitae nisl et ex accumsan condimentum. Etiam erat diam, congue id sapien ac, pretium finibus justo. Phasellus magna enim, blandit vitae dignissim ac, gravida nec justo. In neque sem, vehicula quis augue ac, congue efficitur sem. Curabitur rutrum dolor vitae libero tempor condimentum. Vestibulum consectetur est mauris, et blandit elit semper in. Morbi imperdiet fermentum quam vitae pulvinar. Donec at nibh eget neque sollicitudin fringilla in sed odio. Proin viverra quam in neque maximus, et lacinia turpis semper. Integer consequat volutpat nisi porta dignissim. Suspendisse mattis pulvinar egestas. Praesent a leo nunc.
          </p>               
        </article>
      </section>
    </>
  );
};

export default Apropos;
