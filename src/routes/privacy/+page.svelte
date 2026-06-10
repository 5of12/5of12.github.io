<script lang="ts">
  import { companyInfo, siteMeta } from "$lib/content/site";
</script>

<svelte:head>
  <title>Privacy Policy · {siteMeta.title}</title>
  <meta
    name="description"
    content="Privacy policy for the Playtonik app by 5of12 LLP."
  />
</svelte:head>

<article class="privacy-page">
  <header class="privacy-hero panel">
    <p class="section-kicker"><span>Playtonik</span> Privacy</p>
    <h1>Privacy Policy</h1>
    <p class="page-intro">
      This policy applies to the Playtonik app for mobile devices, provided by
      {companyInfo.name} as a freemium service.
    </p>
    <p class="privacy-hero__date">Effective June 5, 2025</p>
  </header>

  <div class="privacy-content panel panel--nested">
    <p>
      This privacy policy applies to the Playtonik app (referred to as the
      “Application”) for mobile devices, created by {companyInfo.name}
      (referred to as the “Service Provider”) as a freemium service. This service
      is intended for use “AS IS”.
    </p>

    <section>
      <h2>Information collection and use</h2>
      <p>
        The Application does not obtain any information when you download and
        use it. Registration is not required to use the Application.
      </p>
    </section>

    <section>
      <h2>Location information</h2>
      <p>
        The Application does not collect precise information about the location
        of your mobile device.
      </p>
    </section>

    <section>
      <h2>Third-party access</h2>
      <p>
        Since the Application does not collect any information, no data is
        shared with third parties.
      </p>
    </section>

    <section>
      <h2>Opt-out rights</h2>
      <p>
        You can stop all collection of information by the Application by
        uninstalling it. You may use the standard uninstall processes available
        as part of your mobile device or through the mobile application
        marketplace or network.
      </p>
    </section>

    <section>
      <h2>Children</h2>
      <p>
        The Application is not used to knowingly solicit data from or market to
        children under the age of 13.
      </p>
      <p>
        The Service Provider does not knowingly collect personally identifiable
        information from children. The Service Provider encourages children
        never to submit personally identifiable information through the
        Application or Services.
      </p>
      <p>
        Parents and legal guardians are encouraged to monitor their children’s
        internet usage and instruct them never to provide personally
        identifiable information through the Application or Services without
        permission. If you believe a child has provided personally identifiable
        information, contact the Service Provider at
        <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a> so that the
        necessary action can be taken. You must also be at least 16 years old to consent
        to the processing of personally identifiable information in your country,
        unless a parent or guardian may do so on your behalf.
      </p>
    </section>

    <section>
      <h2>Security</h2>
      <p>
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. However, since the Application does not collect any
        information, there is no risk of your data being accessed by
        unauthorized individuals through the Application.
      </p>
    </section>

    <section>
      <h2>Changes</h2>
      <p>
        This Privacy Policy may be updated from time to time. The Service
        Provider will notify you of changes by updating this page. You are
        advised to consult this Privacy Policy regularly, as continued use is
        deemed approval of any changes.
      </p>
    </section>

    <section>
      <h2>Your consent</h2>
      <p>
        By using the Application, you consent to the processing of information
        as set forth in this Privacy Policy now and as amended by the Service
        Provider.
      </p>
    </section>

    <section>
      <h2>Contact us</h2>
      <p>
        If you have questions about privacy while using the Application or about
        the Service Provider’s practices, email
        <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
      </p>
    </section>
  </div>
</article>

<style>
  .privacy-page {
    max-width: 58rem;
    margin-inline: auto;
  }

  .privacy-hero {
    display: grid;
    gap: 1rem;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .privacy-hero h1 {
    margin: 0;
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
  }

  .privacy-hero__date {
    margin: 0;
    color: var(--muted);
    font-size: 0.9rem;
    font-weight: 650;
  }

  .privacy-content {
    display: grid;
    gap: 2rem;
    margin-top: 1rem;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .privacy-content section {
    display: grid;
    gap: 0.75rem;
    padding-top: 2rem;
    border-top: 1px solid var(--line-strong);
  }

  .privacy-content h2 {
    margin: 0;
    font-size: clamp(1.45rem, 3vw, 2rem);
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .privacy-content p {
    margin: 0;
    color: var(--muted);
    font-size: 1.03rem;
    line-height: 1.75;
  }

  .privacy-content a {
    color: var(--text);
    font-weight: 650;
    text-decoration: underline;
    text-underline-offset: 0.16em;
  }
</style>
