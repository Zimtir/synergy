function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $1572597be94ce13f$exports = {};
$1572597be94ce13f$exports = JSON.parse('{"name":"@Zimtir/synergy","version":"1.0.0","description":"","source":"src/index.js","main":"../application-executor/www/application.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","watch":"parcel watch","build":"parcel build"},"repository":{"type":"git","url":"git+https://github.com/Zimtir/synergy.git"},"author":"Marat Zimnurov <zimtir@mail.ru>","license":"MIT","bugs":{"url":"https://github.com/Zimtir/synergy/issues"},"homepage":"https://github.com/Zimtir/synergy","devDependencies":{"@qiwi/semantic-release-gh-pages-plugin":"^5.2.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@semantic-release/github":"^8.0.5","@semantic-release/npm":"^9.0.1","conventional-changelog-conventionalcommits":"^5.0.0","parcel":"^2.6.2","semantic-release":"^19.0.3"},"dependencies":{"application-source":"file:../application-source"},"plugins":["@semantic-release/commit-analyzer","@semantic-release/release-notes-generator",["@semantic-release/changelog",{"changelogFile":"CHANGELOG.md"}],{"path":"@semantic-release/git","assets":["package.json","package-lock.json","CHANGELOG.md"],"message":"chore(release): ${nextRelease.version} [skip ci]\\n\\n${nextRelease.notes}"},"@semantic-release/github","@semantic-release/npm"],"release":{"verifyConditions":["@semantic-release/changelog","@semantic-release/npm","@semantic-release/git","@semantic-release/github","@qiwi/semantic-release-gh-pages-plugin"],"publish":["@semantic-release/npm",{"path":"@semantic-release/github","assets":["CHANGELOG.md","dist/desktop/*"]},["@qiwi/semantic-release-gh-pages-plugin",{"msg":"updated","branch":"web","src":"dist/web"}]]},"files":["README.md","LICENSE","dist/web"],"publishConfig":{"registry":"https://npm.pkg.github.com","tag":"latest","access":"public"}}');


const $f1327b6e9a6deb6b$export$42eb87a118829fc0 = (host, version)=>{
    const application = document.getElementById("application");
    if (!application) {
        alert("no app box provided");
        return;
    }
    const bundles = $f1327b6e9a6deb6b$export$9858345620665231(host, version).map((bundle)=>{
        const link = document.createElement("a");
        link.href = bundle.url;
        link.innerText = bundle.name;
        link.download = bundle.url;
        link.style.margin = "10px";
        return link;
    });
    application.append(...bundles);
};
const $f1327b6e9a6deb6b$var$withBundle = (host, name, version)=>{
    const url = `${host}/releases/download/v${version}/synergy-${name}`;
    return {
        url: url,
        name: name
    };
};
const $f1327b6e9a6deb6b$export$9858345620665231 = (host, version)=>[
        $f1327b6e9a6deb6b$var$withBundle(host, "linux_arm64", version),
        $f1327b6e9a6deb6b$var$withBundle(host, "linux_x64", version),
        $f1327b6e9a6deb6b$var$withBundle(host, "mac_x64", version),
        $f1327b6e9a6deb6b$var$withBundle(host, "win_x64", version), 
    ];


(0, $f1327b6e9a6deb6b$export$42eb87a118829fc0)((0, (/*@__PURE__*/$parcel$interopDefault($1572597be94ce13f$exports))).homepage, (0, (/*@__PURE__*/$parcel$interopDefault($1572597be94ce13f$exports))).version);


//# sourceMappingURL=application.js.map
