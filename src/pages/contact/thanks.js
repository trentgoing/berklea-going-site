import React from 'react';
import Layout from '../../components/Shared/Layout';
import PageTitle from '../../components/Shared/PageTitle';
import Subtitle from '../../components/Shared/Subtitle';

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <PageTitle title="Thank You" />
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Subtitle title="Your message has been sent" />
            </div>
          </div>
      </div>
    </section>
  </Layout>
);
