export const initApplication = (host, version) => {
  const application = document.getElementById("application");
  if (!application) {
    alert("no app box provided");
    return;
  }

  const bundles = withBundles(host, version).map((bundle) => {
    const link = document.createElement("a");

    link.href = bundle.url;
    link.innerText = bundle.name;
    link.download = bundle.url;
    link.style.margin = "10px";

    return link;
  });

  application.append(...bundles);
};

const withBundle = (host, name, version) => {
  const url = `${host}/releases/download/v${version}/synergy-${name}`;

  return {
    url,
    name,
  };
};

export const withBundles = (host, version) => [
  withBundle(host, "linux_arm64", version),
  withBundle(host, "linux_x64", version),
  withBundle(host, "mac_x64", version),
  withBundle(host, "win_x64", version),
];
